<template>
  <GmapMap
    :center="center"
    :zoom="8"
    :options="options"
    style="width: 100%; height: 280px"
  >
    <GmapMarker
      :position="marker.position"
      :clickable="false"
      :draggable="false"
    />
  </GmapMap>
</template>
<script>
export default {
  name: 'maps',
  props: {
    parentData: Object,
  },
  data() {
    return {
      marker: {
        position: {
          lat: parseFloat(this.parentData.location.coordinates.latitude),
          lng: parseFloat(this.parentData.location.coordinates.longitude),
        },
      },
      center: {
        lat: parseFloat(this.parentData.location.coordinates.latitude),
        lng: parseFloat(this.parentData.location.coordinates.longitude),
      },
      options: {
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        disableDefaultUI: false,
        scrollwheel: true,
        clickableIcons: false,
        draggable: true,
      },
    };
  },
};
</script>
