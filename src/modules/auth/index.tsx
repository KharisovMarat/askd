import React from 'react';
import { Text, Center, Grid, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Card } from 'shared';
import { useYupValidationResolver } from 'app/utils/yupValidationResolver';
import { validationSchema } from './schema';

const Auth = () => {
  const navigate = useNavigate();
  const { control, formState, handleSubmit } = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(validationSchema),
  });

  const { isValid } = formState;

  const onSubmit = () => navigate('/');

  return (
    <Card>
      <Center flexDirection='column'>
        <Text>АСКД 2.0 авторизация</Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid gap={4}>
            <Controller
              control={control}
              name='login'
              render={({ field, fieldState }) => (
                <FormControl isRequired isInvalid={fieldState.invalid}>
                  <FormLabel htmlFor='login'>Логин</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name='pass'
              render={({ field, fieldState }) => (
                <FormControl isRequired isInvalid={fieldState.invalid}>
                  <FormLabel htmlFor='pass'>Пароль</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
          </Grid>
        </form>

        <Button disabled={!isValid} onClick={onSubmit} mt={2} colorScheme='blue' type='submit'>
          Вход
        </Button>
      </Center>
    </Card>
  );
};

export { Auth };
