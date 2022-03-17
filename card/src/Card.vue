<template>
  <div class="card">
    <div v-if="isNew" class="new">New</div>
    <img class="image" :src="img" />
    <div class="content">
      <div class="type">
        <span>{{ type }}</span> -
        <span>{{ date }}</span>
      </div>

      <h1 class="title">{{ title }}</h1>
      <h3 class="meta">{{ subTitle }}</h3>

      <div class="description">{{ desc }}</div>

      <div class="buttons">
        <Button @click="$emit('click-btn-1')" class="btn" variant="secondary">
          Button 1
        </Button>
        <Button v-if="doubleButton" @click="$emit('click-btn-2')" class="btn"
          >Button 2</Button
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import Button from '~/button/src/Button.vue';

type CardType = 'offer';

const props = defineProps({
  isNew: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
  },
  type: {
    type: String as PropType<CardType>,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: true,
  },
  doubleButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
$border-radius: 10px;

.card {
  color: #0b1d43;
  border-radius: $border-radius;

  .new {
    position: absolute;
    z-index: 10;
    background-color: #0b1d43;
    color: white;
    padding: 4px 16px;
    margin: 16px;
    border-radius: 4px;
  }

  .image {
    border-radius: $border-radius $border-radius 0 0;
  }

  .content {
    padding: $border-radius;
    width: 100%;

    .title {
      font-size: 32px;
    }
    .meta,
    .type {
      font-size: 14px;
      color: #8892a8;
    }

    .description {
      margin-top: 16px;
    }

    .buttons {
      margin-top: 32px;
      display: flex;
      justify-content: space-between;

      .btn {
        flex: 1;

        &:nth-child(2) {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
