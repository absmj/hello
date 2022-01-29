<template>
      <div class="navigation">
          <NuxtLink to="/skills">
            <div class="btn"><i :style="{'color': /skills/gm.test($route.path)?'black':'white'}" class="fa fa-cogs"></i></div>
          </NuxtLink>
          <NuxtLink to="/portfolio">
            <div class="btn"><i :style="{'color': /portfolio/gm.test($route.path)?'black':'white'}" class="fas fa-briefcase"></i></div>
          </NuxtLink>
          <a class="btn" href="/cv.pdf" target="_blank"><i class="fas fa-file"></i></a>
      </div>
</template>



