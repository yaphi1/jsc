best version:


This goes in Theme Functions (functions.php):

<?php
function Get_Post_Number($postID, $category){
	$temp_query = $wp_query;
	$postNumberQuery = new WP_Query(array ( 'orderby' => 'date', 'category_name' => $category, 'order' => 'ASC', 'post_type' => 'any','posts_per_page' => '-1' ));
	$counter = 1;
	$postCount = 0;
	if($postNumberQuery->have_posts()) :
		while ($postNumberQuery->have_posts()) : $postNumberQuery->the_post();
			if ($postID == get_the_ID()){
				$postCount = $counter;
			} else {
				$counter++;
			}
		endwhile;
	endif;
	wp_reset_query();
	$wp_query = $temp_query;
	return $postCount;
}
?>


This goes in the loop:

<?php
$currentCategory = get_the_category();
if ($currentCategory[0]->name == 'Lessons'){
	$currentID = get_the_ID();
	$currentNumber = Get_Post_Number($currentID, $currentCategory[1]->name);
	?>
	<br><?php echo $currentCategory[1]->name; ?>
	- Unit <?php echo $currentNumber; ?>
<?php } ?>











original version:

http://stackoverflow.com/questions/9322860/how-to-get-the-post-number-in-wordpress


<?php
function Get_Post_Number($postID){
	$temp_query = $wp_query;
	$postNumberQuery = new WP_Query(array ( 'orderby' => 'date', 'order' => 'ASC', 'post_type' => 'any','posts_per_page' => '-1' ));
	$counter = 1;
	$postCount = 0;
	if($postNumberQuery->have_posts()) :
		while ($postNumberQuery->have_posts()) : $postNumberQuery->the_post();
			if ($postID == get_the_ID()){
				$postCount = $counter;
			} else {
				$counter++;
			}
		endwhile;
	endif;
	wp_reset_query();
	$wp_query = $temp_query;
	return $postCount;
}
?>



<?php $currentID = get_the_ID(); ?>
<?php $currentNumber = Get_Post_Number($currentID); ?>

<?php echo $currentNumber; ?>