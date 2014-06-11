<?php
/*
	Template Name: Say hello 
*/
 get_header(); ?>
	
<?php while ( have_posts() ) : the_post(); ?>
	<section id="main" role="main" class="about">
        <div class="wrapper">
           
            <aside>
                <h1><?php the_title(); ?></h1>
            </aside>
            <section class="main-content">
            <h2><?php the_field('intro_text'); ?></h2>
            	<?php the_content(); ?>
                <div class="form-container">
                    <?php gravity_form(1, false, false, false, '', true, 12); ?>
                </div>
            </section>
		</div>
        
	</section> <!-- /#main -->
<?php endwhile; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
