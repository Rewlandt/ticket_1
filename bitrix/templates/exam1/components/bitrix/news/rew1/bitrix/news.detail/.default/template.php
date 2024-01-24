<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
$Img = SITE_TEMPLATE_PATH."/img/rew/no_photo.jpg";

if (isset($arResult["DETAIL_PICTURE"]["SRC"]))
	$Img = $arResult["DETAIL_PICTURE"]["SRC"];
?>

<div class="review-block">
						<div class="review-text">
							<div class="review-text-cont">
								<?=$arResult["DETAIL_TEXT"];?>
							</div>
							<div class="review-autor">
								<?=$arResult["NAME"];?>,
								<?=$arResult["DISPLAY_ACTIVE_FROM"];?> <?=$GetMessage["YEAR"];?>,
								<?=$arResult["PROPERTIES"]["POSITION"]["VALUE"];?>,
								<?=$arResult["PROPERTIES"]["COMPANY"]["VALUE"];?>.
							</div>
						</div>
						<div style="clear: both;" class="review-img-wrap">
							<img src="<?=$arResult["DETAIL_PICTURE"]["SRC"];?>" alt="<?=$arResult["DETAIL_PICTURE"]["ALT"];?>">
						</div>
						</div>
						<?php if ($arResult["PROPERTIES"]["FILE"]["VALUE"]) { ?>
						<div class="exam-review-doc">
						<p><?=GetMessage("TITLE_FILE"):?></p>
						<? foreach ($arResult["PROPERTIES"]["FILE"]["VALUE"] as $idFile) { ?>
							<?php
								$srcFile = $APPLICATION->GetPath($idFile);
								$obFile = $APPLICATION->GetArrayByID($idFile);
								$arFile = $obFile->Fetch();
							?>
							<div  class="exam-review-item-doc">
								<img class="rew-doc-ico" src="<?=SITE_TEMPLATE_PATH;?>./img/icons/pdf_ico_40.png">
								<a href="">Файл 1</a>
							</div>
						<div  class="exam-review-item-doc">
							<img class="rew-doc-ico" src="./img/icons/pdf_ico_40.png">
							<a href="">Файл 2</a>
						</div>
						<div  class="exam-review-item-doc">
							<img class="rew-doc-ico" src="./img/icons/pdf_ico_40.png">
							<a href="">Файл 3</a>
						</div>
						<?php } ?>
						</div>
						<?php } ?>
						<hr>
