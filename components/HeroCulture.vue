<template>
  <div class="container hero">
    <div class="row">
      <div class="col-md-12 center">
        <h2>{{ $t('heroCulture.message') }}</h2>
        <iframe
          class="cultureMovie"
          width="90%"
          height="515"
          src="https://www.youtube.com/embed/unPQHIc0oW0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p>
          {{ $t('heroCulture.description') }}
        </p>

        <p>
          {{ $t('heroCulture.descriptionII') }}
        </p>

        <p>
          {{ $t('heroCulture.descriptionIII') }}
        </p>
      </div>
      <div class="col-md-6">
        <p>
          {{ $t('heroCulture.descriptionIV') }}
        </p>

        <p>
          {{ $t('heroCulture.descriptionV') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: 50px;
  padding-bottom: 50px;
}
.center {
  text-align: center;
}
.cultureMovie {
  margin-bottom: 40px;
}
h2 {
  margin: 40px 0;
  @media screen and (max-width: 640px) {
    font-size: 38px;
    margin-bottom: 20px;
    line-height: 1;
  }
}
</style>
