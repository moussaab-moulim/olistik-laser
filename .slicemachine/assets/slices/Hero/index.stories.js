import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"button_label":"none","button_url":{"link_type":"Web","url":"http://google.com"}}],"primary":{"slice_id":"white","title":[{"type":"heading1","text":"Shirt","spans":[]}],"text":[{"type":"paragraph","text":"Tempor do ut amet velit ullamco enim.","spans":[]}],"background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"},"background_color":"#57f960"},"slice_type":"hero","id":"_Default"}} />
_Default.storyName = ''

export const _NoActionHero = () => <MyComponent slice={{"variation":"noActionHero","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"slice_id":"chemical","title":[{"type":"heading1","text":"About","spans":[]}],"text":[{"type":"paragraph","text":"Irure exercitation amet voluptate. Consequat culpa veniam eu enim incididunt culpa nostrud.","spans":[]}],"background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"},"background_color":"#c49bf1"},"slice_type":"hero","id":"_NoActionHero"}} />
_NoActionHero.storyName = ''
