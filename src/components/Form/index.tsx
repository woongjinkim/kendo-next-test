"use client";
import {
  Form,
  Field,
  FormElement,
  FieldRenderProps,
  FormRenderProps,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Label, Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";

const formColumn = [
  {
    name: "id",
    type: "string",
    component: "input",
    label: "ID",
  },
  {
    name: "password",
    type: "string",
    component: "input",
    label: "Password",
  },
  {
    name: "username",
    type: "string",
    component: "input",
    label: "UserName",
  },
  {
    name: "email",
    type: "email",
    component: "emailInput",
    label: "Email",
  },
  {
    name: "select",
    type: "select",
    component: "select",
    label: "select",
    selectItem: ["one", "two", "three", "four"],
  },
];

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const formInput = (fieldRenderProps: FieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    type,
    optional,
    ...others
  } = fieldRenderProps;

  const showValidationMessage: string | false | null =
    touched && validationMessage;
  const errorId: string = showValidationMessage ? `${id}_error` : "";

  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={"k-form-field-wrap"}>
        <Input
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          {...others}
        />
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
  );
};

export default function FormComponent() {
  const handleSubmit = (data: { [name: string]: any }) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps: FormRenderProps) => (
        <FormElement style={{ maxWidth: 650 }}>
          <fieldset className={"k-form-fieldset"}>
            {formColumn.map((item, index) => {
              switch (item.component) {
                case "input":
                  return (
                    <div key={index}>
                      <Field
                        id={index}
                        name={item.name}
                        label={item.label}
                        component={formInput}
                      />
                    </div>
                  );
                case "emailInput":
                  return (
                    <div key={index}>
                      <Field
                        name={item.name}
                        type={item.type}
                        component={EmailInput}
                        label={item.label}
                        validator={emailValidator}
                      />
                    </div>
                  );
                // case "select":
                //   return (
                //     <div key={index}>
                //       <Field
                //         name={item.name}
                //         type={item.type}
                //         component={"select"}
                //         label={item.label}
                //       />
                //     </div>
                //   );
                default:
                  return;
              }
            })}
          </fieldset>
          <div className="k-form-buttons">
            <button type={"submit"} disabled={!formRenderProps.allowSubmit}>
              Submit
            </button>
          </div>
        </FormElement>
      )}
    />
  );
}

// return (
//   <Form
//     onSubmit={handleSubmit}
//     render={(formRenderProps: FormRenderProps) => (
//       <FormElement style={{ maxWidth: 650 }} horizontal={true}>
//         <fieldset className={"k-form-fieldset"}>
//           <FieldWrapper>
//             <Label>Label</Label>
//             <Input />
//           </FieldWrapper>
//         </fieldset>
//         <div className="k-form-buttons">
//           <button type={"submit"} disabled={!formRenderProps.allowSubmit}>
//             Submit
//           </button>
//         </div>
//       </FormElement>
//     )}
//   />
// );
