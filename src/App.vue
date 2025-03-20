<template>
  <div>
    <nav>
      <router-link to="/">今天</router-link> |
      <router-link to="/calendar">日历</router-link> |
      <router-link to="/add-event">添加事件</router-link> |
      <router-link to="/overview">总览</router-link> |
      <router-link to="/profile">我的</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  background: #f8f8f8;
  padding: 10px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}
nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
