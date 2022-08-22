# How to Use

Open `.html` inside every theme folder into web browser. Always use this query string parameter `index.html?debug=true&env=dev&env_settings=static` for development. 

> In theme: default you also need to add `&hash=7ozb8r4zkw469anp`

# Test

If `debug` parameter is true, you can use several available functions below to debug and show your theme.

## Generate Dummy Data

```
data(quantity, params)
dataGif(quantity, params)
dataVideo(quantity, params)
```

## Use Generated Data to Show Animation

```
add(data)
show(data) // Always show
hide(data)
```

Examples:

```
add(data(5))
add(dataGif(5))
add(dataVideo(5))

show(data(5))
hide(data(5))
```

## Available Data

Example: 

```
const data = {
  'supporter_name': '[ Stream Test ]',
  'unit': 'Cendol', 
  'quantity': 1,
  'supporter_message': 'Selalu Berkarya!',
  'supporter_avatar': 'https://trakteer.id/images/v2/stats-1.png',
  'unit_icon': 'https://cdn.trakteer.id/images/mix/mie-ayam.png',
  'price': 'Rp 5.000',
  'media': {
    'gif': 'XTJzFN8rUtx7i,
    'video': {
      'id': 'LGv2WkUX-nc', 
      'start': 52
    }
  }
}
```