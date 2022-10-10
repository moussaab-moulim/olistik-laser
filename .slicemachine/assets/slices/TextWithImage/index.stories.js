import MyComponent from '../../../../slices/TextWithImage';

export default {
  title: 'slices/TextWithImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"button_label":"changing","button_url":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"slice_id":"love","title":[{"type":"heading1","text":"Bright","spans":[]}],"text":[{"type":"paragraph","text":"Incididunt Lorem cillum est qui cillum tempor excepteur.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8"},"background_color":"#d68d65"},"slice_type":"text_with_image","id":"_Default"}} />
_Default.storyName = ''

export const _RightText = () => <MyComponent slice={{"variation":"rightText","version":"sktwi1xtmkfgx8626","items":[{"button_label":"product","button_url":{"link_type":"Web","url":"http://google.com"}}],"primary":{"slice_id":"done","title":[{"type":"heading1","text":"Beautiful","spans":[]}],"text":[{"type":"paragraph","text":"Ipsum Lorem quis pariatur cillum ex quis proident in mollit consectetur ex laboris dolor cillum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"},"background_color":"#56a3f1"},"slice_type":"text_with_image","id":"_RightText"}} />
_RightText.storyName = ''
