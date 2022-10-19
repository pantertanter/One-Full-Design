import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Teori omkring produktudvikling',
    paragraph: 'Dette firma er baseret på teknologisk-teoretisk-udvikling i produkt udviklingen. I hvilket vi kan tage erfaringen med os og inkorporere den fornyede proccess-forbedring, internt i firmaet til at styrke vores potentiale og egenskab, for at få endnu flere opgaver, med en tilfredsstillende mulighed for et fyldestgodtgørende, færdigt resultat. Jeg er uddannet i teknisk og teoretisk produkt udvilking specielt i Java, Javascript, MySQL og systemkodning og ønsker at udføre mere og nyere produkt udvilkings opgaver og opgaver. Ingen opgave er for lille eller betragtet færdig indtil er enige om en acceptabel løsning-beslutning, der ikke møder alle kravene/Bruger-historierne/specifikationerne/funktionaliteterne/målene... Og fortrukkent en helt masse mere i hvilket det er muligt for os at vinde i kontruktive, kompetitative, færdiggjorte resultater. Jeg foretrækker at være i kontakt med alle processerne og den tilgængelige sikkerhed i at være i stand til at tilgå og bedømme alt i produkt historikken. Marked, produktspesifikke udvilkingsændringer, udvilkings proccesser, vedligeholdelsesforventninger, videre udvilking og strategier, der kommer sammen med, followups via potentielle produkt rekurserende kontinuerlitet i fremtiden. Jeg har lavet arbejde i Solid works I have done work in SolidWorks, Fusion 360 og Inventor. Har du brug for en systemløsning som en løsningstilpasset til dine specifikkationer, behov, krav, kommandoer, lyster, smag, skræddersygning, administration? Frontend og backend skrevet i programmeringssprogene Java, Javascript, React, MySQL.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
-----
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                Dette er et portfolio.
                  </h3>
                <p className="m-0">
                Det her er et simpelt portfolio i hvilket jeg ønsker at udstille, "Simple 3D CAD tegninger", systemer jeg har kreeret og alle mulige forskellige andre ting som jeg føler mig sikker i at udvikle i fremtiden. For at du skal få en god idé for hvad der kan blive kreeret/designet/udviklet. Håber jeg at du vil føle dig fri til at udforske siderne, eksempler og billeder lige så meget som du har lyster for og læse og skrive mig en email fx. gennem (send email) formularen og knappen på kontakt formular siden.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/4,_2_drop_through_assembly_2022-Sep-23_01-45-16PM-000_CustomizedView25849388260_png.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
-------
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                Ønsker og pris
                  </h3>
                <p className="m-0">
                Måske I ønsker at få noget sketched ud, tegnet "fra sketch", lavet en mock up eller har en simpel idé. Vi kan diskuttere en fair pris, for jer.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/6,2_curve_2022-Sep-14_07-23-08AM-000_CustomizedView13402167234_png.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
-----
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                Der er ikke så mange begrænsninger når vi taler produktudvikling fra min side. Jeg udvikler frit og om andet ikke muligt fra bunden, så det hele er skræddersyet efter jeres behov og ønsker. Vi kan altid diskuttere ændringer hvis der skulle komme forhindringer og nå frem til den bedste løsning for jer. Jeg er bare glad for at få lov til at udvikle.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Skiglasses70thv1.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
------
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                Dette er et portfolio.
                  </h3>
                <p className="m-0">
                Det her er et simpelt portfolio i hvilket jeg ønsker at udstille, "Simple 3D CAD tegninger", systemer jeg har kreeret og alle mulige forskellige andre ting som jeg føler mig sikker i at udvikle i fremtiden. For at du skal få en god idé for hvad der kan blive kreeret/designet/udviklet. Håber jeg at du vil føle dig fri til at udforske siderne, eksempler og billeder lige så meget som du har lyster for og læse og skrive mig en email fx. gennem (send email) formularen og knappen på kontakt formular siden.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/StangandHandlebarsv11.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
-------
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                Ønsker og pris
                  </h3>
                <p className="m-0">
                Måske I ønsker at få noget sketched ud, tegnet "fra sketch", lavet en mock up eller har en simpel idé. Vi kan diskuttere en fair pris, for jer.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Vinoplukkerv1.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
-----
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                Der er ikke så mange begrænsninger når vi taler produktudvikling fra min side. Jeg udvikler frit og om andet ikke muligt fra bunden, så det hele er skræddersyet efter jeres behov og ønsker. Vi kan altid diskuttere ændringer hvis der skulle komme forhindringer og nå frem til den bedste løsning for jer. Jeg er bare glad for at få lov til at udvikle.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Bottleopenerv1.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
-----            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;