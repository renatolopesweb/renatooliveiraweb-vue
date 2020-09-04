<template>
  <div>
    <h5 style="margin-top:100px">HOME</h5>
    <button @click="shareData()">CLICK</button>
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in myTableData" :key="index">
          <td>{{person.firstName}}</td>
          <td>{{person.lastName}}</td>
          <td>{{person.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Homee",
  data() {
    return {
      myTableData: [
        {
          firstName: "Delma",
          lastName: "Leite",
          email: "del@bol.com"
        },
        {
          firstName: "Ana",
          lastName: "Oliveira",
          email: "ana@google.com"
        }
      ]
    };
  },
  methods: {
    shareData() {
      this.$router.push({ name: "Users", params: { data: this.myTableData }});
    }
  }
};
</script>

<style>
header{display: none!important;}
/* body, html {background-color: #333333; color: #999;} */
</style>