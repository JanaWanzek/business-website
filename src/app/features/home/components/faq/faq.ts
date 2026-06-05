import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  standalone: true,
  selector: 'app-faq',
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  items: FaqItem[] = [
    {
      question: 'Wie profitieren Organisationen von Ihrer Arbeit?',
      answer: 'Meine Begleitung unterstützt Organisationen dabei, eine gesunde Arbeitskultur zu entwickeln. Das umfasst Mitarbeiterbindung, konstruktiven Umgang mit Konflikten, psychologische Sicherheit und die Stärkung von Resilienz im Team.',
      open: false,
    },
    {
      question: 'Welche Themen werden von Organisationen häufig angefragt?',
      answer: 'Zu den häufig angefragten Themen gehören Führungskräftereflexion, Stressmanagement, diskriminierungssensible Organisationskultur sowie die Begleitung von Veränderungsprozessen.',
      open: false,
    },
    {
      question: 'Wie läuft die Zusammenarbeit ab?',
      answer: 'Die Zusammenarbeit beginnt mit einem kostenfreien Erstgespräch, in dem wir gemeinsam Ihren Bedarf klären. Darauf aufbauend entwickle ich ein maßgeschneidertes Konzept, das sich an Ihren spezifischen Zielen und Rahmenbedingungen orientiert.',
      open: false,
    },
    {
      question: 'Was unterscheidet Ihre Arbeit von klassischer Unternehmensberatung?',
      answer: 'Mein Ansatz ist systemisch und bezieht gesellschaftliche Kontexte ein. Ich verstehe mich als Prozessbegleiterin – ich entwickle keine Lösungen von außen, sondern unterstütze Ihre Organisation dabei, eigene Antworten zu finden und nachhaltige Strukturen aufzubauen.',
      open: false,
    },
    {
      question: 'Wie werden Diversity und Gleichstellung in Ihrer Arbeit berücksichtigt?',
      answer: 'Macht- und Strukturanalyse sowie Rollenreflexion sind integrale Bestandteile meiner Arbeit. Ich bringe einen intersektionalen Blick mit und helfe Organisationen, Ungleichheiten zu erkennen und aktiv anzugehen.',
      open: false,
    },
    {
      question: 'Wie unterscheiden sich Ihre Formate von klassischen Seminaren?',
      answer: 'Meine Workshops sind partizipativ gestaltet und orientieren sich an einem humanistischen Rahmen (u.a. Maslow, Rogers). Statt reiner Wissensvermittlung steht die aktive Auseinandersetzung und das gemeinsame Lernen im Mittelpunkt.',
      open: false,
    },
    {
      question: 'Bieten Sie auch Coaching für Unternehmen und Teams an?',
      answer: 'Ja, ich begleite Führungskräfte, Teams und Organisationsentwicklungsprozesse. Executive Coaching, Team-Coaching und systemische Organisationsbegleitung sind feste Bestandteile meines Angebots.',
      open: false,
    },
    {
      question: 'Wie wird Erfolg in Ihrer Arbeit gemessen?',
      answer: 'Erfolg zeigt sich in klareren Entscheidungsprozessen, weniger Konflikten, stabiler Führungsarbeit und höherer Mitarbeiterzufriedenheit. Wir definieren zu Beginn gemeinsam, was Erfolg für Ihre Organisation bedeutet.',
      open: false,
    },
    {
      question: 'Arbeiten Sie auch mit Privatpersonen?',
      answer: 'Ja, ich begleite auch Einzelpersonen – ob Einzelsitzungen oder ein längerer Coaching-Prozess. Das Erstgespräch ist kostenlos und unverbindlich.',
      open: false,
    },
    {
      question: 'Wo finden die Angebote statt?',
      answer: 'Ich bin in Bremen ansässig und biete meine Leistungen deutschlandweit an. Alle Formate sind auch online verfügbar.',
      open: false,
    },
  ];

  toggle(item: FaqItem) {
    item.open = !item.open;
  }
}
