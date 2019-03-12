function check(form)
{
  if (form.logv.value == "admin" && form.passv.value == "123")
  {
      Form.open("Pocupka.html")
  }
  else
  {
      alert('Пользователя ' + form.logv.value + ' не существует')
  }
}
