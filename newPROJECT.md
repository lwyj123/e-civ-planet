 ## 项目结构

```Javascript
src
├── core
│   └── world
│       ├── Camera.ts  // 图像处理部分
│       ├── Definitions.d.ts  // 图像处理部分
│       ├── EventHandler.ts  // Dom事件相关及部分处理，双击缩放和滚轮也是这块的
│       ├── Events.ts  // 项目的事件机制EventEmitter
│       ├── Extent.ts  // 意义不明，看构造函数应该是没什么实际用处的
│       ├── Globe.ts   // 核心主要文件，保存scene、renderer等核心对象
│       ├── GraphicGroup.ts
│       ├── Image.ts  // 用于缓存图片的工具对象
│       ├── Kernel.ts // 存了些常量的静态类
│       ├── Locator.ts  // 调用了qq map的API，暂时意义不明
│       ├── Object3D.ts  // 图形学相关
│       ├── Program.ts  // 图形学相关，WebGLProgram
│       ├── Renderer.ts // 图形学相关
│       ├── Scene.ts  // 图形学相关，Scene
│       ├── Service.ts  // 获取数据相关的类，主要用于获取当前位置以及地图其他内容信息。(后期资源位置等也可以通过这个获取)
│       ├── TileGrid.ts  // 切片相关的类
│       ├── Utils.ts  // 一些工具方法，包括一个简单的发布订阅模式
│       ├── VertexBufferObject.ts  // 图形学相关
│       ├── geometries  // 图形类基础库和类型
│       ├── graphics
│       │   ├── Graphic.ts
│       │   ├── LineGraphic.ts
│       │   ├── LocationGraphic.ts  // 当前位置
│       │   ├── MeshColorGraphic.ts
│       │   ├── MeshTextureGraphic.ts
│       │   ├── MultiPointsGraphic.ts  //  图点
│       │   └── Tile.ts
│       ├── layers  // 图层部分，包括道路及地貌层等。TiledLayer是基础类
│       │   ├── Google.ts
│       │   ├── LabelLayer.ts  // 标识层，用来标识公路以及位置 http://mt3.google.cn/vt/imgtp=png32&lyrs=h@365000000&hl=zh-CN&gl=cn&x=3376&y=1553&z=12&s=Galil
│       │   ├── PoiLayer.ts    // 位置层，用来表示地点
│       │   ├── RouteLayer.ts  // 路径图层，用于标识路径
│       │   ├── SubTiledLayer.ts // 给TiledLayer用的，暂时不知道干啥的
│       │   └── TiledLayer.ts    // 瓦片层，用于展示基础地貌
│       ├── materials
│       │   ├── ColorMaterial.ts
│       │   ├── MarkerTextureMaterial.ts
│       │   ├── Material.ts
│       │   ├── MeshTextureMaterial.ts
│       │   └── TileMaterial.ts
│       └── math  // 图形学相关数学部分
│           ├── Line.ts
│           ├── Matrix.ts
│           ├── Plan.ts
│           ├── Utils.ts
│           ├── Vector.ts
│           └── Vertice.ts
```