<template>
  <div>
    <h2>Basic</h2>
    <form v-on:submit.prevent="checkForm" action="/" method="post">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name</label>
        <input v-model="form.name" type="text">
        {{ form.name }}
      </p>

      <p>
        <label for="message">Message</label>
        <textarea v-model="form.message"></textarea>
      </p>

      <p>
        <label class="label">Subscribe</label>
        <input type="checkbox" v-model="form.subscribe">
      </p>

      <p>
        <input type="checkbox" v-model="form.books" value="On the Origin of Species">
        <label for="On the Origin of Species">On the Origin of Species</label>

        <input type="checkbox" v-model="form.books" value="A Brief History of Time">
        <label for="A Brief History of Time">A Brief History of Time</label>

        <input type="checkbox" v-model="form.books" value="The Selfish Gene">
        <label for="The Selfish Gene">The Selfish Gene</label>

        {{ form.books }}
      </p>

      <p>
        <label for="Male">Male</label>
        <input type="radio" v-model="form.gender" value="male">

        <label for="Female">Female</label>
        <input type="radio" v-model="form.gender" value="female">

        <label for="Other">Other</label>
        <input type="radio" v-model="form.gender" value="other">

        {{ form.gender }}
      </p>

      <p>
        <select v-model="form.favourite">
          <option disabled value="">Please select one</option>
          <option value="On the Origin of Species">On the Origin of Species</option>
          <option value="A Brief History of Time">A Brief History of Time</option>
          <option value="The Selfish Gene">The Selfish Gene</option>
        </select>
        {{ form.favourite }}
      </p>

      <p>
        <select v-model="form.favourites" name="favourites_array[]" multiple >
          <option v-for="book in options.books" v-bind:value="book.value">
            {{ book.text }}
          </option>
          <!-- <option value="On the Origin of Species">On the Origin of Species</option>
          <option value="A Brief History of Time">A Brief History of Time</option>
          <option value="The Selfish Gene">The Selfish Gene</option> -->
        </select>
        {{ form.favourites }}
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  data () {
    return {
      errors: [],
      form: {
        name: null,
        message: null,
        subscribe: false,
        books: [],
        gender: null,
        favourite: null,
        favourites: []
      },
      options: {
        books: [
          { value: 'On the Origin of Species', text: 'On the Origin of Species', label: 'on-the-origin-of-species'},
          { value: 'A Brief History of Time', text: 'A Brief History of Time', label: 'a-brief-history-of-time'},
          { value: 'The Selfish Gene', text: 'The Selfish Gene', label: 'the-selfish-gene'}
        ]
      }
    }
  },
  methods:{
    checkForm (e) {
      this.errors = []
      if (!this.form.name) {
        this.errors.push('Name required')
      }
      if (!this.form.message) {
        this.errors.push('Message required')
      }
      if (!this.form.subscribe) {
        this.errors.push('Subscription required')
      }
      // if (this.form.books.length === 0) {
      //   this.errors.push('Books required')
      // }
      // if (!this.form.gender) {
      //   this.errors.push('Gender required')
      // }
      // if (!this.form.favourite) {
      //   this.errors.push('Favourite required')
      // }
      // if (this.form.favourites.length === 0) {
      //   this.errors.push('Favourites required')
      // }
      if (!this.errors.length) {
        this.processForm(e)
      }
    },
    processForm (e) {
      var formData = new FormData(e.target)
      // Or:
      var data = qs.stringify(this.form)
      console.log(this.form)
      console.log(data)

      axios.post('../server.php', data)
      .then((response) => {
        // success callback
        console.log(response.data)
      }, (response) => {
        // error callback
      })
    }
  }
}
</script>

<style>
/** empty */
</style>
