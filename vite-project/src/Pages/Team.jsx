import React from 'react';
import TeamHero from '../components/TeamPage/TeamHero';
import LeadershipTeam from '../components/TeamPage/LeadershipTeam';
import TeamMembers from '../components/TeamPage/TeamMembers';
import AdvisoryBoard from '../components/TeamPage/AdvisoryBoard';
import CompanyCulture from '../components/TeamPage/CompanyCulture';
import JoinCTA from '../components/TeamPage/JoinCTA';


export default function Team() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 transition-colors duration-300">
      {/* <Header /> - Commented out as it's referenced in the original but not defined */}
      <main>
        <TeamHero />
        <LeadershipTeam />
        <TeamMembers />
        <AdvisoryBoard />
        <CompanyCulture />
        <JoinCTA />
      </main>
      {/* <Footer /> - Commented out as it's referenced in the original but not defined */}
    </div>
  );
}