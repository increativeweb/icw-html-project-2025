<?php
if ( ! in_array( $_SERVER['HTTP_HOST'], [ 'sizer.co.in', 'www.sizer.co.in' ], true ) ) {
    echo '<meta name="robots" content="noindex, nofollow">';
}

function pr($data){
  echo '<pre>';
  echo $data;
  echo '</pre>';
}
?>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WWLB6GFGF9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WWLB6GFGF9');
</script>