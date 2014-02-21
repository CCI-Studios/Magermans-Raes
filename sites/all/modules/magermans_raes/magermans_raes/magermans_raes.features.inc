<?php
/**
 * @file
 * magermans_raes.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function magermans_raes_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function magermans_raes_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_fe_nodequeue_export_fields().
 */
function magermans_raes_fe_nodequeue_export_fields() {
  $nodequeues = array();

  // Exported nodequeues: brokers
  $nodequeues['brokers'] = array(
    'name' => 'brokers',
    'title' => 'Brokers',
    'subqueue_title' => '',
    'size' => 0,
    'link' => '',
    'link_remove' => '',
    'owner' => 'nodequeue',
    'show_in_ui' => 1,
    'show_in_tab' => 1,
    'show_in_links' => 0,
    'reference' => 0,
    'reverse' => 0,
    'i18n' => 0,
    'subqueues' => 1,
    'types' => array(
      0 => 'mr_broker',
    ),
    'roles' => array(),
    'count' => 0,
  );

  // Exported nodequeues: insurance_basics
  $nodequeues['insurance_basics'] = array(
    'name' => 'insurance_basics',
    'title' => 'Insurance Basics',
    'subqueue_title' => '',
    'size' => 0,
    'link' => '',
    'link_remove' => '',
    'owner' => 'nodequeue',
    'show_in_ui' => 1,
    'show_in_tab' => 1,
    'show_in_links' => 0,
    'reference' => 0,
    'reverse' => 0,
    'i18n' => 0,
    'subqueues' => 1,
    'types' => array(
      0 => 'insurance_basics_page',
    ),
    'roles' => array(),
    'count' => 0,
  );

  return $nodequeues;
}

/**
 * Implements hook_image_default_styles().
 */
function magermans_raes_image_default_styles() {
  $styles = array();

  // Exported image style: brokers_widget_background.
  $styles['brokers_widget_background'] = array(
    'name' => 'brokers_widget_background',
    'label' => 'Brokers Widget Background',
    'effects' => array(
      3 => array(
        'label' => 'Crop and scale manually',
        'help' => 'Crop and scale a user-selected area, respecting the ratio of the destination width and height.',
        'effect callback' => 'manualcrop_crop_and_scale_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'manualcrop_crop_and_scale_form',
        'summary theme' => 'manualcrop_crop_and_scale_summary',
        'module' => 'manualcrop',
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 589,
          'height' => 331,
          'upscale' => 1,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'brokers_widget_background',
        ),
        'weight' => 0,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function magermans_raes_node_info() {
  $items = array(
    'insurance_basics_page' => array(
      'name' => t('Insurance Basics Page'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'mr_broker' => array(
      'name' => t('Broker'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
