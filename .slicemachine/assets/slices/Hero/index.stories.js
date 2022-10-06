import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"button_label":"evening","button_url":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"slice_id":"bicycle","title":"least","text":[{"type":"paragraph","text":"Sint duis in esse cillum.","spans":[]}],"background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8"},"background_color":"#11c509"},"slice_type":"hero","id":"_Default"}} />
_Default.storyName = ''

export const _NoActionHero = () => <MyComponent slice={{"variation":"noActionHero","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"slice_id":"riding","title":[{"type":"heading1","text":"People","spans":[]}],"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"}},"slice_type":"hero","id":"_NoActionHero"}} />
_NoActionHero.storyName = ''
