<template>
  <div class="container">
    <div class="container__head">
      <p class="container__title">編輯會員資料</p>
    </div>
    <div class="container__foot">
      <div class="uploader">
        <figure class="uploader__head">
          <img :src="image" alt="userPicture" class="img" />
        </figure>
        <label class="uploader__foot" for="SelectImg">
          <input
            type="file"
            class="selectImg"
            id="SelectImg"
            @change="selectedImg"
          />
        </label>
      </div>
      <form class="form">
        <label for="firstName" class="label label-sm">
          First Name<br />
          <input
            type="text"
            :value="parentData.name.first"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-sm">
          Last Name<br />
          <input
            type="text"
            :value="parentData.name.last"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-lg">
          Birth<br />
          <input
            type="text"
            :value="parentData.dob.date"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-sm">
          E-mail<br />
          <input
            type="text"
            :value="parentData.email"
            class="input"
            id="FirstName"
          />
        </label>
        <form class="label label-sm">
          Gender<br />
          <label for="Male" class="radio">
            <input
              type="radio"
              :checked="parentData.gender === 'male'"
              id="Gender"
            />Male
          </label>
          <label for="Female" class="radio">
            <input
              type="radio"
              :checked="parentData.gender === 'female'"
              id="Gender"
            />Female
          </label>
        </form>
        <label for="firstName" class="label label-sm">
          Country<br />
          <input
            type="text"
            :value="parentData.location.country"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-sm">
          State<br />
          <input
            type="text"
            :value="parentData.location.state"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-sm">
          City<br />
          <input
            type="text"
            :value="parentData.location.city"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-sm">
          Street<br />
          <input
            type="text"
            :value="parentData.location.street.name"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-sm">
          Number<br />
          <input
            type="text"
            :value="parentData.location.street.number"
            class="input"
            id="FirstName"
          />
        </label>
        <label for="firstName" class="label label-lg">
          Coordinate<br />
          <input
            type="text"
            :value="parentData.location.coordinates.latitude"
            class="input input-sm mr-15"
            id="FirstName"
          />
          <input
            type="text"
            :value="parentData.location.coordinates.longitude"
            class="input input-sm ml-15"
            id="FirstName"
          />
        </label>
      </form>
      <div class="buttons text-center">
        <input
          type="submit"
          class="btn btn-peace"
          value="確定"
          @click="$emit('closeModal')"
        />
        <input
          type="submit"
          class="btn btn-cancel"
          value="取消"
          @click="$emit('closeModal')"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modal-modify',
  props: {
    parentData: Object,
  },
  data() {
    return {
      image: this.parentData.picture.large,
    };
  },
  methods: {
    selectedImg(evt) {
      const file = evt.target.files.item(0);
      const reader = new FileReader();
      reader.addEventListener('load', this.imageLoaded);
      reader.readAsDataURL(file);
    },
    imageLoaded(evt) {
      this.image = evt.target.result;
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    border-radius: 3px;
    overflow: hidden;
    width: 740px;
    &__head {
      width: 100%;
      padding: 10px;
      background: {
        color: #666;
      }
    }
    &__title {
      width: 100%;
      color: #fff;
    }
    &__foot {
      display: flex;
      flex-wrap: wrap;
      padding: 15px;
      background: {
        color: #fff;
      }
    }
  }
  .uploader {
    width: 25%;
  }
  .form {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .btn {
    padding: 6px 10px;
    border: {
      radius: 3px;
      width: 0;
    }
    color: #fff;
    & + & {
      margin: {
        left: 5px;
      }
    }
    &-cancel {
      background: {
        color: #6c757d;
      }
    }
    &-peace {
      background: {
        color: #2597c7;
      }
    }
  }
  .label {
    padding: {
      left: 15px;
      right: 15px;
    }
    line-height: 2em;
    box-sizing: border-box;
    &-sm {
      width: 50%;
    }
    &-lg {
      width: 100%;
    }
  }
  .input {
    display: inline-block;
    width: 100%;
    font: {
      size: 15px;
    }
    border: {
      width: 1px;
      style: solid;
      color: #ced4da;
      radius: 3px;
    }
    padding: 10px;
    box-sizing: border-box;
    &-sm {
      width: 47%;
    }
  }
  .ml {
    &-15 {
      margin: {
        left: 15px;
      }
    }
  }
  .mr {
    &-15 {
      margin: {
        right: 15px;
      }
    }
  }
  .buttons {
    width: 100%;
    text-align: center;
    margin: {
      top: 10px;
    }
  }
  .text {
    &-center {
      text-align: center;
    }
  }
  .radio {
    display: inline;
  }
</style>
