<?php get_header(); ?>
<section id="main" role="main">
	<div id="panel">
    	
    </div>
    <?php 	
		$args = array (
			'post_type'		=> 'work',
			'posts_per_page'   => -1
		);
		$posts = get_posts($args);
		
	?>
    <div id="container" class="clickable variable-sizes clearfix">
        <?php 
			foreach ($posts as $post) {
			setup_postdata($post);
			$class = '';
			$thumb = '';
			if( get_field('what_size_would_you_like_this_project_to_display_as') == 'small' ):
				$class = 'small'; 
					$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'smallthumb' );
					else:
				$class = 'large';
				$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'largethumb' );
			endif; 
		?>
        <a href="#" class="item <?php echo $class; ?> click-me" title="tile" rel="<?php the_permalink(); ?>"><img src="<?php echo $thumb[0]?>"  class="draggable" /></a>
        <?php }  ?>
    </div> 
</section>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
