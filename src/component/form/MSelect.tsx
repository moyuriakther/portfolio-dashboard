import { Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
// import { SelectProps } from 'antd/lib/select';


interface ISelectProps {
    name: string;
    label?: string;
    required?: boolean;
    items: string[];
  }
  
  const MSelect = ({
    items,
    name,
    label
  }: ISelectProps) => {
    const { control, formState } = useFormContext();
    const isError = formState.errors[name] !== undefined;
  
    return (
      <div style={{ marginBottom: '20px' }}>
        {label ? <label>{label}</label> : null}
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              {...field}
              status={isError ? 'error' : ''}
              style={{ width: '100%' }}
              placeholder={label}
            >
              {items.map((item) => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          )}
        />
        {/* {isError && <div style={{ color: 'red' }}>{formState.errors[name]?.message as string}</div>} */}
      </div>
    );
  };
  
  export default MSelect;