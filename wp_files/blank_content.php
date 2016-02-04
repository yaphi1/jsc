<?php /* Template Name: Blank Content */ ?>

<?php get_header(); ?>

<div id="content">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<h1><?php the_title(); ?></h1>

	<?php the_content(); ?>

	<?php echo get_post_meta($post->ID, "scripts", true); ?>
	<?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>