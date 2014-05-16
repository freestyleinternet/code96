<?php
/*
	Template Name: Say hello 
*/
 get_header(); ?>
	
<?php while ( have_posts() ) : the_post(); ?>
	<section id="main" role="main" class="content">
			<?php
                    $homepageid = 22;
			?>
             <div class="wrapper">
                <h3><?php the_title(); ?></h3> 
                <?php the_content(); ?>
                <div class="form-container">
                    <?php gravity_form(1, false, false, false, '', true, 12); ?>
                </div>
			</div>

	</section> <!-- /#main -->
<?php endwhile; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
