import { Button, FormControlLabel, TextField, Typography, Box, Checkbox } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { AddTodoFormProps } from './AddTodoForm.types';
import { CreateTodoDto } from 'types/todo.types';
import { todoSchema } from 'src/schemas/todoSchema';

export function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodoDto>({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      name: '',
      info: '',
      isImportant: false,
    },
  });

  const isImportant = watch('isImportant');

  const hanlderFormSubmit = (data: CreateTodoDto) => {
    onSubmit(data);
  };
  return (
    <Box component="form" onSubmit={handleSubmit(hanlderFormSubmit)} display="flex" flexDirection="column" gap="20px">
      <Typography variant="h5" fontWeight={500}>
        Новая задача
      </Typography>
      <TextField
        label="Название задачи"
        {...register('name')}
        fullWidth
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <TextField
        label="Описание задачи"
        {...register('info')}
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        error={Boolean(errors.info)}
        helperText={errors.info?.message}
      />
      <FormControlLabel
        control={
          <Checkbox
            {...register('isImportant')}
            icon={<GradeOutlinedIcon color="secondary" />}
            checkedIcon={<GradeIcon color="secondary" />}
          />
        }
        label={<Box>{isImportant ? 'Важная задача' : 'Обычная задача'}</Box>}
      />
      <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
        Добавить
      </Button>
    </Box>
  );
}
