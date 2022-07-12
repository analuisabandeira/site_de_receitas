export class FormValidations {
    
    static getErrorMessage(
        fieldName: string,
        validatorName: string,
        validatorValue?: any
      ) {
        const config: any = {
          "required": `O campo ${fieldName} é obrigatório!`,
          "minlength": `O campo ${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
          "maxlength": `O campo ${fieldName} pode ter no máximo ${validatorValue.requiredLength} caracteres.`,
          "pattern": 'Campo inválido',
        };
        return config[validatorName];
      }
}
