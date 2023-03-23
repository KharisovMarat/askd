import React from 'react';
import { Text, Grid, FormControl, Input, FormErrorMessage, Button, Stack, Flex, Icon } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { RouterLink, FormLabel, Card, Description } from 'shared';
import { useYupValidationResolver } from 'app/utils/yupValidationResolver';
import { Path } from 'app/constants/routerPaths';
// @ts-ignore
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { validationSchema } from './authSchema';

const Auth = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(validationSchema),
  });

  // const { isValid, isDirty } = formState;

  const onSubmit = () => navigate(Path.MAIN);

  return (
    <Stack>
      <Stack>
        <Text color='red.500' fontWeight='extrabold'>
          <LogoIcon />
        </Text>
        <Text>
          Автоматизированная система
          <br /> контроля деятельности
        </Text>
      </Stack>

      <Stack mt={8}>
        <Text fontSize='2xl' fontWeight='bold'>
          Добро пожаловать!
        </Text>
        <Text fontWeight='thin'>Авторизуйтесь чтобы продолжить</Text>
      </Stack>

      <Stack mt={8} onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={8}>
          <Controller
            control={control}
            name='login'
            render={({ field, fieldState }) => (
              <FormControl isInvalid={fieldState.invalid}>
                <FormLabel htmlFor='login'>Логин</FormLabel>
                <Input {...field} />
                <FormErrorMessage position='absolute'>{fieldState.error?.message}</FormErrorMessage>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name='pass'
            render={({ field, fieldState }) => (
              <FormControl isInvalid={fieldState.invalid}>
                <FormLabel htmlFor='pass'>Пароль</FormLabel>
                <Input type='password' {...field} />
                <FormErrorMessage position='absolute'>{fieldState.error?.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </Grid>
      </Stack>

      <Flex alignItems='center' justifyContent='space-between' mt={8}>
        <RouterLink to={Path.FORGOT}>
          <Text color='blue.500'>Забыли пароль?</Text>
        </RouterLink>

        <Button disabled={false} onClick={onSubmit} width='140px' colorScheme='blue' type='submit'>
          Войти
        </Button>
      </Flex>

      <Stack mt={4}>
        <Description>Для завершения сеанса, в целях безопасности выйдите из системы и закроете браузер</Description>

        <Flex alignItems='center'>
          <Icon color='blue.500' as={QuestionIcon} />
          <RouterLink to={Path.AUTH_SUPPORT} pl={2} color='blue.500'>
            Техподдержка
          </RouterLink>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Auth;
