<?php get_header(); ?>

<div id="content">
	<div id="maincol">
		<h1>Course Map - <?php single_cat_title(); ?></h1>


		<!--
		in current category
			for each level
				show level title
				show ordered posts in level
		see:
		http://stackoverflow.com/questions/1780386/looping-through-wordpress-categories
		-->

		<?php
		$current_category = get_category( get_query_var( 'cat' ) );

		$cat_args=array(
			'orderby' => 'name',
			'order' => 'ASC',
			'child_of' => $current_category->term_id
			);
		$categories=get_categories($cat_args);
		foreach($categories as $category) { 
			$args=array(
				'category__in' => array($category->term_id),
				'numberposts' => -1,
				'orderby' => 'date',
				'order' => 'ASC'
				);
			$posts=get_posts($args);
			if ($posts) {
				?>
				<div class="step">
					<div class="step_title">
						<?php echo $category->name; ?>
					</div>
					<div class="step_content">
						
						<?php
						foreach($posts as $post_number => $post) {
							setup_postdata($post); ?>
							<div class="unit">
								<div class="unit_title">Unit <?php echo $post_number+1; ?></div>
								<a href="<?php the_permalink() ?>" class="unit_description">
									<?php the_title(); ?>
								</a>
							</div>
							<?php
						} // foreach($posts
						?>

					</div> <!-- /step_content -->
				</div> <!-- /step -->
				<?php
			} // if ($posts
		} // foreach($categories
		?>


	</div>

	<?php get_sidebar(); ?>
</div>



<?php get_footer(); ?>