<?php
/**
 * The template used for displaying page content in single.php
 *
 * @package mattbanks
 * @since mattbanks 2.5
 */
?>
<div id='maincol'>
    <section class="central">
   		<h1><?php the_title(); ?></h1>
		<?php the_content(); ?>
        <?php get_template_part( 'templates/partials/inc', 'socialbuttons' ); ?>
    </section>
    <div class="leftcol">
    	<h1>by <?php the_author(); ?></h1>
        <p><?php the_time('F jS Y'); ?></p>
    </div>
    <aside class="rightcol">
    	<?php 
			if ( has_post_thumbnail() ) { 
				the_post_thumbnail('blurbthumb', array('class' => 'nudgedown'));
			}
		?>
        <p class="searchitem"><a href="#">search</a></p>
        <p>related posts</p>
        <ul>
        <?php
            $recent_posts = wp_get_recent_posts();
            foreach( $recent_posts as $recent ){
                echo '<li><a href="' . get_permalink($recent["ID"]) . '" title="Look '.esc_attr($recent["post_title"]).'" >' .   $recent["post_title"].'</a> </li> ';
            }
        ?>
        </ul>
    </aside>
</div>



<!--<section class="box-1 flexbox">
	<h1><?php the_title(); ?></h1>
</section>
<section class="box-2 flexbox">
  
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>
            <div class="entry">
                <?php the_content(); ?>
                <?php //wp_link_pages( array( 'before' => 'Pages: ', 'next_or_number' => 'number' ) ); ?>
            </div>
            <?php //get_template_part( 'templates/partials/inc', 'socialbuttons' ); ?>
  
</section>
<aside class="box-3 flexbox">
fdgfdg
</aside>-->