'use client';

import { 
  dphMembers, 
  humasMembers, 
  diklatMembers, 
  litbangMembers, 
  ppmMembers, 
  saprasMembers, 
  p4gnMembers, 
  dewanPembinaMembers,
  type TeamMember
} from '@/data/mockData';

export default function TeamSection() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const renderTeamGroup = (title: string, members: TeamMember[], color: string) => (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold text-${color} mb-6 text-center`}>
        {title}
      </h3>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden aspect-[3/4] w-64 mx-auto"
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-red-100 flex items-center justify-center">
                    <span className="text-4xl text-red-600 font-bold">
                      {member.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-transparent p-4">
                  <div className="text-center">
                    <h4 className="text-white text-lg font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="text-red-100 text-sm font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Team KSR UNPAS
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
            Team KSR UNPAS 2025/2026
          </h3>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Dewan Pembina */}
        {renderTeamGroup("DEWAN PEMBINA", dewanPembinaMembers, "red-600")}
        
        {/* DPH (DPH + HUMAS) */}
        {renderTeamGroup(
          "DPH (Dewan Pengurus Harian)",
          [...dphMembers, ...humasMembers],
          "red-600"
        )}
        
        {/* DPO Heading */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-red-600 mb-2 text-center">DPO (Dewan Pengurus Operasional)</h3>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        {/* Bidang DIKLAT */}
        {renderTeamGroup("BIDANG DIKLAT", diklatMembers, "red-600")}
        
        {/* Bidang LITBANG */}
        {renderTeamGroup("BIDANG LITBANG", litbangMembers, "red-600")}
        
        {/* Bidang PPM */}
        {renderTeamGroup("BIDANG PPM", ppmMembers, "red-600")}
        
        {/* Bidang SAPRAS */}
        {renderTeamGroup("BIDANG SAPRAS", saprasMembers, "red-600")}
        
        {/* Bidang P4GN */}
        {renderTeamGroup("BIDANG P4GN", p4gnMembers, "red-600")}

        {/* Join the Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Bergabung dengan Kepengurusan Kami
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Jadilah bagian dari tim yang melayani dengan hati dan mengabdi untuk masyarakat. 
              Bergabunglah dengan KSR UNPAS dan kembangkan potensi kepemimpinan Anda.
            </p>
            <button
              onClick={() => smoothScrollTo('daftar')}
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Daftar Sekarang
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
