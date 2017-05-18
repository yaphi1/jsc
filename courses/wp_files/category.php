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
				echo '<p>Category: <a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '>' . $category->name.'</a> </p> ';
				foreach($posts as $post) {
					setup_postdata($post); ?>
					<p><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></p>
					<?php
				} // foreach($posts
			} // if ($posts
		} // foreach($categories
		?>






		<!-- Level 1 -->

		<div class="step">
			<div class="step_title">
				Level 1 - Start Here
				<div class="step_subtitle">
					Get the fundamentals right and make everything else easier
				</div>
			</div>
			<div class="step_content">
				<div class="unit">
					<div class="unit_title">Unit 1</div>
					<a href="/intro/" class="unit_description">
						Get the most out of this course - DO NOT SKIP THIS
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 2</div>
					<a href="/innerhtml/" class="unit_description">
						Write some practical JavaScript
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 3</div>
					<a href="/avoid-getting-stuck/" class="unit_description">
						How to avoid getting stuck
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 4</div>
					<a href="/variables/" class="unit_description">
						Use variables so you don’t have to keep repeating yourself
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 5</div>
					<a href="/basic-math/" class="unit_description">
						Make JavaScript do your math for you
					</a>
				</div>
			</div>
		</div>







		<!-- Level 2 -->

		<div class="step">
			<div class="step_title">
				Level 2 - Write Smart Code
				<div class="step_subtitle">
					Make your code clever and convenient with functions and logic
				</div>
			</div>
			<div class="step_content">
				<div class="unit">
					<div class="unit_title">Unit 1</div>
					<a href="/functions/" class="unit_description">
						Make your life easier with functions
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 2</div>
					<a href="/scope/" class="unit_description">
						How to avoid messing up your functions: Know scope and hoisting
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 3</div>
					<a href="/logic/" class="unit_description">
						Make your code smart by building in logic!
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 4</div>
					<a href="/logic-supercharged/" class="unit_description">
						Supercharge your code's logic with logical operators, parentheses, and booleans
					</a>
				</div>
			</div>
		</div>







		<!-- Level 3 -->

		<div class="step">
			<div class="step_title">
				Level 3 - Get Stylish and Interactive
				<div class="step_subtitle">
					Respond to user actions and change stuff dynamically on a page
				</div>
			</div>
			<div class="step_content">
				<div class="unit">
					<div class="unit_title">Unit 1</div>
					<a href="/manipulate-styles/" class="unit_description">
						Manipulate styles with JavaScript
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 2</div>
					<a href="/clicks/" class="unit_description">
						Make your pages do cool things when your users click
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 3</div>
					<a href="/text-input/" class="unit_description">
						Let your users input text!
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 4</div>
					<a href="/other-events/" class="unit_description">
						Handle user interactions besides clicks
					</a>
				</div>
			</div>
		</div>







		<!-- Level 4 -->

		<div class="step">
			<div class="step_title">
				Level 4 - Control Your Data
				<div class="step_subtitle">
					Get powerful with data using loops, arrays, and objects
				</div>
			</div>
			<div class="step_content">
				<div class="unit">
					<div class="unit_title">Unit 1</div>
					<a href="/loops/" class="unit_description">
						Loops: accomplish a lot with little code
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 2</div>
					<a href="/arrays/" class="unit_description">
						Arrays: Convenient lists that will make your code easier to write
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 3</div>
					<a href="/array-methods/" class="unit_description">
						Array methods: Get better control of your arrays and do useful things with lists of data
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 4</div>
					<a href="/objects/" class="unit_description">
						Objects: Handle data neatly and conveniently
					</a>
				</div>
			</div>
		</div>







		<!-- Level 5 -->

		<div class="step">
			<div class="step_title">
				Level 5 - Master Your Pages
				<div class="step_subtitle">
					Gain better control of your pages
				</div>
			</div>
			<div class="step_content">
				<div class="unit">
					<div class="unit_title">Unit 1</div>
					<a href="/dom-traversal/" class="unit_description">
						Better DOM Traversal: Get elements by more than just their ids
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 2</div>
					<a href="/attributes/" class="unit_description">
						Change HTML attributes dynamically
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 3</div>
					<a href="/string-methods/" class="unit_description">
						String methods: Get better control of your text
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 4</div>
					<a href="/regex/" class="unit_description">
						Validate user input with regular expressions
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 5</div>
					<a href="/urls/" class="unit_description">
						Working with URLs
					</a>
				</div>
			</div>
		</div>







		<!-- Level 6 -->

		<div class="step">
			<div class="step_title">
				Level 6 - Dance with Numbers
				<div class="step_subtitle">
					Work with math, timing, and dates
				</div>
			</div>
			<div class="step_content">
				<div class="unit">
					<div class="unit_title">Unit 1</div>
					<a href="/math-object/" class="unit_description">
						Get better control of your numbers - Math and randomness
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 2</div>
					<a href="/timing/" class="unit_description">
						Learn to control timing
					</a>
				</div>
				<div class="unit">
					<div class="unit_title">Unit 3</div>
					<a href="/dates-and-times/" class="unit_description">
						JavaScript dates and times
					</a>
				</div>
			</div>
		</div>








		<!-- Level 7 -->

		<div class="step">
			<div class="step_title">
				Level 7 - Victory Lap
				<div class="step_subtitle">
					What to do next
				</div>
			</div>
			<div class="step_content">
				<div class="unit">
					<div class="unit_title">Unit 1</div>
					<a href="/next-steps/" class="unit_description">
						What to do next: portfolio projects
					</a>
				</div>
			</div>
		</div>


	</div>

	<?php get_sidebar(); ?>
</div>



<?php get_footer(); ?>