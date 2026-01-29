import z, { email } from 'zod';

const validateSchemaSignin = z
	.object({
		email: z.string().email('Введите корректный email'),
		password: z
			.string()
			.min(8, 'Минимум 8 символов')
			.regex(/[a-z]/, 'Как минимум 1 буква')
			.regex(/[0-9]/, 'Как минимум 1 цифра'),
  })

const validateSchemaSignup = z
	.object({
		email: z.string().email('Введите корректный email'),
  })

function validateForm(data, schema, form) {
	try {
		const validatedData = schema.parse(data);

		return validatedData;
	} catch (error) {
    const errorList = JSON.parse(error);
		errorList.forEach((er) => {
      if(data[er.path[0]]){
        showError(er.path[0], form);
      }
		});
		return null;
	}
}

function showError(name, form) {
	form.querySelector(`[name="${name}"]`).closest('.input').classList.add(
		'input--error'
	);
}

function hideAllErrors() {
	for (const error of document.querySelectorAll('.input--error')) {
		error.classList.remove('input--error');
	}
}

function createFormObject(form) {
	const data = {};
	for (const input of form.querySelectorAll('input')){
		const {name, value} = input;
    data[name] = value
	}
	return data;
}

if (document.querySelector('.js-password-show')){
  const input = document.querySelector('.js-password-input');
  function showPasswordValue() {
    input.type = input.type == 'text' ? 'password' : 'text'
  }
  document.querySelector('.js-password-show').addEventListener('click', showPasswordValue)
}

if (document.querySelector('.js-form-signin')){
  const formSignin = document.querySelector('.js-form-signin');

  function formSigninValidate(e){
    e.preventDefault();
    const form = e.currentTarget;
    hideAllErrors();
    const data = createFormObject(form);
		const result = validateForm(data, validateSchemaSignin, form);
    form.querySelector('[type="submit"]').disabled = !result
  }

  formSignin.addEventListener('input', formSigninValidate)

  function formSigninSubmit(e){
    e.preventDefault();
    // submit формы
  }

  formSignin.addEventListener('submit', formSigninSubmit)
}


if (document.querySelector('.js-form-signup')){
  const formSignup = document.querySelector('.js-form-signup');

  function formSignupValidate(e){
    e.preventDefault();
    const form = e.currentTarget;
    hideAllErrors();
    const data = createFormObject(form);
		const result = validateForm(data, validateSchemaSignup, form);
    form.querySelector('[type="submit"]').disabled = !result
  }

  formSignup.addEventListener('input', formSignupValidate)

  function formSignupSubmit(e){
    e.preventDefault();
    // submit формы
  }

  formSignup.addEventListener('submit', formSignupSubmit)
}