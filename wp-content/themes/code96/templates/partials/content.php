<?php
/**
 * The template used for displaying content
 *
 * @package mattbanks
 * @since mattbanks 2.5
 */
?>
<?php 
$class = '';
if( get_field('position_of_featured_image') == 'top' ):
	$class = 'top'; 
		else:
	$class = 'bottom';
endif; 
?>
<article class="<?php echo $class; ?>" id="post-<?php the_ID(); ?>">
        <a href="<?php the_permalink() ?>">
        <?php 
			if ( has_post_thumbnail() ) { 
				the_post_thumbnail('blurbthumb', array('class' => 'top-feature'));
			}
		?>
        <p class="author">posted by <?php the_author(); ?></p>
        <h1><?php the_title(); ?></h1>
        <div class="entry">
            <p><?php echo truncate($post->post_content, 200); ?></p>
        </div>
        <span class="more">read more</span>
        <?php 
			if ( has_post_thumbnail() ) { 
				the_post_thumbnail('blurbthumb', array('class' => 'bottom-feature'));
			}
		?>
    </a>
</article>

