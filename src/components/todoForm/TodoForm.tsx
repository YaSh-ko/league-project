// components/TodoForm/TodoForm.tsx
import { Button, FormControlLabel, TextField, Typography, Box, Checkbox } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { TodoFormProps, AddTodoFormProps, EditTodoFormProps } from './TodoForm.types';
import { CreateTodoDto, UpdateTodoDto } from 'types/todo.types';
import { todoCreateSchema, todoUpdateSchema } from 'src/schemas/todoSchema';

// Type guard для определения типа формы
const isEditForm = (props: TodoFormProps): props is EditTodoFormProps => {
  return props.isEdit === true && 'todoId' in props;
};

export function TodoForm(props: TodoFormProps) {
  const { defaultValues, isSubmitting = false, isEdit = false } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateTodoDto | UpdateTodoDto>({
    resolver: yupResolver(isEdit ? todoUpdateSchema : todoCreateSchema),
    defaultValues: defaultValues || {
      name: '',
      info: '',
      isImportant: false,
      ...(isEdit && { isCompleted: false }),
    },
  });

  const isImportant = watch('isImportant');
  const isCompleted = watch('isCompleted');

  const handlerFormSubmit = (data: CreateTodoDto | UpdateTodoDto) => {
    if (isEditForm(props)) {
      // Для редактирования добавляем id к данным
      props.onSubmit({
        ...(data as UpdateTodoDto),
        id: props.todoId,
      });
    } else {
      // Для создания передаем как есть
      console.log(data);
      props.onSubmit(data as CreateTodoDto);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handlerFormSubmit)} display="flex" flexDirection="column" gap="20px">
      <Typography variant="h5" fontWeight={500}>
        {isEdit ? 'Редактирование задачи' : 'Новая задача'}
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
            checked={isImportant}
            icon={<GradeOutlinedIcon color="secondary" />}
            checkedIcon={<GradeIcon color="secondary" />}
          />
        }
        label={<Box>{isImportant ? 'Важная задача' : 'Обычная задача'}</Box>}
      />

      {isEdit && <FormControlLabel control={<Checkbox {...register('isCompleted')} />} label="Задача выполнена" />}

      <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
        {isEdit ? 'Сохранить изменения' : 'Добавить'}
      </Button>
    </Box>
  );
}
