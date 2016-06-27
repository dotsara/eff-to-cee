# eff-to-cee
## Converting temperatures

This has to be one of the most common try-it-yourself javascript projects, but who cares! It's fun. (: 

[eff-to-see in _action_!](http://toolbox.dotsara.com/eff-to-cee)

### Some of the code…

```javascript
var fahrToCels = function (fahr) {
  return ((fahr - 32) * (5/9)).toFixed(0);
};

var celsToFahr = function (celsius) {
  return (((celsius * 9) / 5) + 32).toFixed(0);
};
```

### notes

* colors ideas! http://jxnblk.com/Spectral/#b900fc&hues=3&rows=5&shiftS=-0.1&shiftL=-0.1
* [CSS3 Button Generator](http://css3buttongenerator.com)