import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';

interface Props {
  placeholder: string;
  name: string;
  label?: string;
}

export const MyTextInput = (props: Props) => {
  const [field, meta] = useField(props.name);
  return (
    // The !! is a way to convert a string to a boolean
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
};
