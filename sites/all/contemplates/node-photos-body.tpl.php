<?php
$photos = $node->field_photos[0]['view'];
$body = $node->content['body']['#value'];
?>

    <div class="db_photos"> <?=$photos?> </div>
    <div class="db_body"> <?=$body?> </div>


