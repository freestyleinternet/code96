<?php get_header(); ?>
	
<?php while ( have_posts() ) : the_post(); ?>
	<section id="main" role="main" class="about">
    	
        <div class="wrapper">
            <aside>
                <h1><?php the_title(); ?></h1>
            </aside>
            <section class="main-content margin--bottom">
            	<h2><?php the_field('intro_text'); ?></h2>
                <div class="columns">
                	<?php the_content(); ?>
                </div>
            </section>

		</div>
        
	</section> <!-- /#main -->
<?php endwhile; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
