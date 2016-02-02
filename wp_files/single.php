<?php get_header(); ?>

<div id="content">
	<div id="maincol">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

		<?php
		$currentCategory = get_the_category();
		if ($currentCategory[0]->name == 'Lessons'){
			$currentID = get_the_ID();
			$currentNumber = Get_Post_Number($currentID, $currentCategory[1]->name);
			?>
			<br><?php echo $currentCategory[1]->name; ?>
			- Unit <?php echo $currentNumber; ?>
		<?php } ?>


		<h1><?php the_title(); ?></h1>

		<?php the_content(); ?>

		<?php echo get_post_meta($post->ID, "scripts", true); ?>
		<?php endwhile; endif; ?>

		<?php get_template_part( 'nav', 'below-single' ); ?>
	</div>

	<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>