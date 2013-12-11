<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <?php
  $col = $id%3 + 1;
  $row_classes = $classes_array[$id] . ' nid-' . $view->result[$id]->nid .' views-col-' . $col;
  ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $row_classes . '"';  } ?>><div>
    <?php print $row; ?>
  </div></div>
<?php endforeach; ?>
