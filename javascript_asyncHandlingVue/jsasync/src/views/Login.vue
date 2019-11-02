<template lang='pug'>
  div.about
    h1 Plz login
    div.login-data
      div.form-field
        input(type='text' placeholder='Username')
      div.form-field
        input(type='password' placeholder='Password')
      div.form-field
        button() Sign in

</template>

<script>
/*  */
export default {
  name: 'login'
}

</script>
