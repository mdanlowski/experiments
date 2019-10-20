<template lang='pug'>
  div.profile
    h1 This is your personal space
    div.profile-info
      div
        h2 Welcome {{profile.name}}
        div.profile-data
          div Logged in as:
            em {{profile.email}}
          hr
          div Permissions: {{profile.admin ? "Administrator" : "Regular user"}}
          hr
          div
            p Avatar
            img(:src="profile.avatarUrl")
      

</template>

<script>
export default {
  name: 'profile',
  mounted() {
    this.profile = this.$store.state.profile;
  },
  data(){
    return {
      profile: {}
    }
  }
}

</script>
