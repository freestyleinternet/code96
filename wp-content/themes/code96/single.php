<?php get_header(); ?>
<div class="container-full">
    	<div class="wrapper">
	<section id="main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'templates/partials/content', 'single' ); ?>

			<?php //comments_template(); ?>

		<?php endwhile; ?>

	</section> <!-- /#main -->
</div>
</div>
<?php get_sidebar(); ?>

<?php get_footer(); ?>
