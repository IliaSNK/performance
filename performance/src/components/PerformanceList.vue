<template>
  <GetPerformance #default="{performance, createPerformance, deletePerformance, updatePerformance}">
    <div>
      <div class="page-title">Управление спектаклями</div>
      <div class="performance">
        <div :style="{width: '100%'}">
          <table>
            <tr class="headers">
              <th v-for="(header, index) in headers" :key="index">
                {{ header.text }}
              </th>
            </tr>
            <tr v-for="(row, index) in performance" :key="index" class="rows" @click="startEdit(row)">
              <td>{{  row[headers[0].value] }}</td>
              <td>{{  row[headers[1].value] }}</td>
              <td>{{  row[headers[2].value] }}</td>
              <td>{{  row[headers[3].value] }} ч</td>
              <td>{{  row[headers[4].value] }} мин</td>
              <td class="delete-icon" @click.stop="deletePerformance(row[headers[0].value])">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5333 15.3335L11.5337 10.6668L11.5283 10.5856L11.5269 10.572C11.4805 10.2302 11.1878 9.9668 10.8333 9.9668C10.4467 9.9668 10.1333 10.2802 10.1333 10.6668L10.1328 15.3335L10.1378 15.4148L10.1396 15.4282C10.186 15.77 10.4787 16.0335 10.8333 16.0335C11.2199 16.0335 11.5333 15.7201 11.5333 15.3335Z" fill="currentColor" />
                  <path d="M13.867 10.6668L13.8666 15.3335C13.8666 15.7201 13.5532 16.0335 13.1666 16.0335C12.812 16.0335 12.5194 15.77 12.473 15.4282L12.4711 15.4147L12.4662 15.3335L12.4666 10.6668C12.4666 10.2802 12.78 9.9668 13.1666 9.9668C13.5211 9.9668 13.8138 10.2302 13.8602 10.572L13.8616 10.5856L13.867 10.6668Z" fill="currentColor" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3583 7.13346H17.6666C18.0532 7.13346 18.3666 7.44687 18.3666 7.83346C18.3666 8.18802 18.1032 8.4807 17.7614 8.52708L17.7479 8.5289L17.6666 8.53392L17.3172 8.53346L16.4816 17.0325C16.3834 18.0301 15.5754 18.8002 14.5876 18.8627L14.5813 18.8631L14.458 18.8669L9.54189 18.8668C8.53952 18.8668 7.69394 18.1381 7.53508 17.1612L7.53406 17.1549L7.51822 17.0325L6.68198 8.53346H6.33327C5.97872 8.53346 5.68602 8.27006 5.63965 7.92819L5.63783 7.91477L5.63281 7.83346C5.63281 7.47891 5.89666 7.18622 6.23853 7.13985L6.25196 7.13802L6.33327 7.13301L9.6416 7.13346C9.74314 5.91999 10.7602 4.9668 11.9999 4.9668C13.2396 4.9668 14.2566 5.91991 14.3583 7.13346ZM12.9459 7.13346C12.8538 6.69556 12.4652 6.3668 11.9999 6.3668C11.5346 6.3668 11.146 6.69563 11.0539 7.13346H12.9459ZM7.86792 8.33348H16.1313L15.2873 16.9151L15.2748 16.9989C15.1972 17.3835 14.8581 17.6668 14.458 17.6668H9.54187L9.45715 17.6625C9.06681 17.623 8.75171 17.3132 8.71254 16.9151L7.86792 8.33348Z" fill="currentColor" />
                </svg>
              </td>
            </tr>
          </table>
        </div>
  
        <div class="form">
          <div class="form-title" v-if="edit">
            Обновить спектакль 
          </div>
          <div class="form-title" v-else> 
            Добаваить спектакль 
          </div>
          <div class="form-element">
            <span>Название</span>
            <input v-model="name" type="text">
          </div>
          <div class="form-element">
            <span>Режиссер</span>
            <input v-model="director" type="text">
          </div>
          <div class="form-element">
            <span>Главный актер</span>
            <input v-model="actor" type="text">
          </div>
          <div class="form-element">
            <span>Продолжительность</span>
            <input v-model="duration" type="text">
          </div>
          <div class="form-element">
            <span>Антракт</span>
            <input v-model="pause" type="text">
          </div>
          <button 
            v-if="edit"
            @click="updatePerformance(name, director, actor, duration, pause); stopEdit()"
          >
            Обновить
          </button>
          <button 
            v-if="edit"
            @click="stopEdit()"
            class="cancel"
          >
            Отменить
          </button>
          <button 
            v-else
            @click="createPerformance(name, director, actor, duration, pause)"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
</GetPerformance>
</template>

<script>
import GetPerformance from './containers/GetPerformance';

export default {
  name: 'PerformanceList',
  components: {
    GetPerformance,
  },
  data() {
    return {
      edit: false,
      headers: [
        {
          text: 'Название',
          value: 'Название_спект.',
        },
        {
          text: 'Режиссер',
          value: 'Режиссер',
        },
        {
          text: 'Главный актер',
          value: 'Гл. актер',
        },
        {
          text: 'Продолжительность',
          value: 'Продолжительность_ч',
        },
        {
          text: 'Антракт',
          value: 'Антракт_мин',
        },
        {
          text: '',
          value: 'Антракт_мин',
        },
      ],
      name: '',
      director: '',
      actor: '',
      duration: '',
      pause: '',
    };
  },
  methods: {
    stopEdit() {
      this.edit = false;
      this.name = '';
      this.director = '';
      this.actor = '';
      this.duration = '';
      this.pause = '';
    },
    startEdit(payload) {
      this.edit = true;
      this.name = payload[this.headers[0].value];
      this.director = payload[this.headers[1].value];
      this.actor = payload[this.headers[2].value];
      this.duration = payload[this.headers[3].value];
      this.pause = payload[this.headers[4].value];
    }
  }
}
</script>
<style scoped>
*{
  font-family: arial, sans-serif;
}
.page-title{
  font-size: 24px;
  margin: 20px;
}
.performance{
  padding: 20px;
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
}
.form{
  min-width: 300px;
  display: flex;
  gap: 8px;
  flex-direction: column;
}
.form-title{
  font-size: 16px;
  font-weight: 700;
}
.form-element{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.form-element input{
  border-radius: 4px;
  outline: #009688;
  height: 24px;
  width: 250px;
  padding: 2px 8px;
}
.delete-icon:hover{
  transition: .3s;
  color: #F44336;
}

button{
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: #009688;
  color: #fff;
  width: 150px;
  height: 32px;
  padding: auto;
}
button:hover{
  transition: .3s;
  background-color: #B2DFDB;
}
table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}

.cancel{
  background-color: #BDBDBD;
}



</style>
