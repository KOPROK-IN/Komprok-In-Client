<template>
  <div class="container">

    <div class="row">
      <div class="h1 mb-3">KOPROK-IN</div>
    </div>

    <div class="row justify-content-center" >

      <div class="col-4">
        <div class="h3"><b>Let's Logging In:</b></div>

        <form @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="email_login"
              placeholder="name@example.com"
              required
            >
            <label for="email">Email</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              v-model="password_login"
              placeholder="Password"
              required
            >
            <label for="password">Password</label>
          </div>

          <button
            type="submit"
            class="btn btn-outline-primary"
          >Login <span class="fa fa-user"></span>
          </button>

        </form>
      </div>
      <!-- END FORM -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email_login: '',
      password_login: ''
    }
  },
  methods: {
    login () {
      const dataInput = {
        email: this.email_login,
        password: this.password_login
      }
      this.email_login = ''
      this.password_login = ''

      this.$store.dispatch('login', dataInput)
    }
  }
}
</script>

<style>

</style>
