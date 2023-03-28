import React, { useState } from 'react';
import {
  Text,
  Grid,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Stack,
  Flex,
  Icon,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { QuestionIcon, ViewIcon } from '@chakra-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { RouterLink, FormLabel, Description } from 'shared';
import { useYupValidationResolver } from 'app/utils/yupValidationResolver';
import { Path } from 'app/constants/routerPaths';

import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { validationSchema } from './authSchema';


const Auth = () => {
  const [passType, setPassType] = useState<React.HTMLInputTypeAttribute | undefined>('password');
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(validationSchema),
  });

  // const { isValid, isDirty } = formState;

  const onSubmit = () => navigate(Path.MAIN);

  const onChangePassType = () => setPassType(passType ? undefined : 'password');

  return (
    <Stack>
      <Stack>
        <LogoIcon />
        <Text lineHeight='shorter' fontSize={12} fontWeight='semibold' color='black'>
          Автоматизированная система
          <br /> контроля деятельности
        </Text>
      </Stack>

      <Stack pt={8}>
        <Text fontSize='2xl' fontWeight='bold' lineHeight='shorter'>
          Добро пожаловать!
        </Text>
        <Text fontWeight='thin'>Авторизуйтесь чтобы продолжить</Text>
      </Stack>

      <Stack pt={8} onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={8}>
          <Controller
            control={control}
            name='login'
            render={({ field, fieldState }) => (
              <FormControl isInvalid={fieldState.invalid}>
                <FormLabel htmlFor='login'>Логин</FormLabel>
                <Input placeholder='Введите логин' {...field} />
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
                <InputGroup>
                  <Input placeholder='Введите пароль' type={passType} {...field} />
                  <InputRightElement children={<ViewIcon />} cursor='pointer' onClick={onChangePassType} />
                </InputGroup>
                <FormErrorMessage position='absolute'>{fieldState.error?.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </Grid>
      </Stack>

      <Flex alignItems='center' justifyContent='space-between' pt={4}>
        <RouterLink to={Path.FORGOT}>
          <Text color='blue.500'>Забыли пароль?</Text>
        </RouterLink>

        <Button disabled={false} onClick={onSubmit} width='140px' colorScheme='blue' type='submit'>
          Войти
        </Button>
      </Flex>

      <Stack pt={4}>
        <Grid>
          <Description>Для завершения сеанса, в целях безопасности выйдите из системы и закроете браузер</Description>
          <Flex alignItems='center' pt={2}>
            <Icon color='blue.500' as={QuestionIcon} height={'14px'} />
            <RouterLink to={Path.AUTH_SUPPORT} pl={2} color='blue.500' fontSize={12}>
              Техподдержка
            </RouterLink>
          </Flex>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Auth;
