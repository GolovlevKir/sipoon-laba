function blurlog(form)
{
  if (form.logv.value == '') form.logv.value = 'Логин'
}

function foclog(form)
{
  if (form.logv.value == 'Логин') form.logv.value = ''
}

function blurpass(form)
{
  if (form.passv.value == '') form.passv.value = 'Пароль'
}

function focpass(form)
{
  if (form.passv.value == 'Пароль') form.passv.value = ''
}
