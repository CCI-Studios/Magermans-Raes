<?php
function magermans_custom_menu_link(array $variables) {
 // check menu name
  if ($variables['element']['#original_link']['menu_name'] == 'main-menu' AND isset($variables['element']['#localized_options']['attributes']['class'])) {
      
    // link classes
    $classes = $variables['element']['#localized_options']['attributes']['class'];
   
    // add link classes to <li> class array
    foreach ($classes AS $key => $value) {
      array_push($variables['element']['#attributes']['class'], $classes[$key]);
    }
  }

  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '><div>' . $output . $sub_menu . "</div></li>\n";
}

function magermans_custom_preprocess_html(&$vars) {
  $path = drupal_get_path_alias($_GET['q']);
  $aliases = explode('/', $path);

  foreach($aliases as $alias) {
    $vars['classes_array'][] = drupal_clean_css_identifier($alias);
  } 
}

?>