# about 首页

## 首页二级标题
显示所有页面的标题链接 0.11.0+
默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：

module.exports = {
  themeConfig: {
    displayAllHeaders: true // 默认值：false
  }
}
# 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
TIP

值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

# 侧边栏分组
你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ]
  }
}
侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

### 首页三级标题
### 首页三级标题
### 首页三级标题
### 首页三级标题
显示所有页面的标题链接 0.11.0+
默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：

module.exports = {
  themeConfig: {
    displayAllHeaders: true // 默认值：false
  }
}
# 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
TIP

值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

# 侧边栏分组
你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ]
  }
}
侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

## 首页二级标题2

### 首页三级标题2
### 首页三级标题2
显示所有页面的标题链接 0.11.0+
默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：

module.exports = {
  themeConfig: {
    displayAllHeaders: true // 默认值：false
  }
}
## 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
TIP

值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

## 侧边栏分组
你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ]
  }
}
侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。