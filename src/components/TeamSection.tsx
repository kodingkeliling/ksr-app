import { teamMembers } from '@/data/mockData';

export default function TeamSection() {
  // Group team members by position category
  const leadership = teamMembers.filter(member => 
    member.position.includes('Ketua') || 
    member.position.includes('Sekretaris') || 
    member.position.includes('Bendahara')
  );
  
  const coordinators = teamMembers.filter(member => 
    member.position.includes('Koordinator') || 
    member.position.includes('Wakil Koordinator')
  );
  
  const support = teamMembers.filter(member => 
    !member.position.includes('Ketua') && 
    !member.position.includes('Sekretaris') && 
    !member.position.includes('Bendahara') &&
    !member.position.includes('Koordinator') &&
    !member.position.includes('Wakil Koordinator')
  );

  const renderTeamGroup = (title: string, members: typeof teamMembers, color: string) => (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold text-${color} mb-6 text-center`}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="text-center">
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-red-600 font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {member.name}
              </h4>
              
              <p className="text-red-600 font-medium text-sm">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            DPH
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
            Dewan Pengurus Harian KSR UNPAS 2024/2025
          </h3>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Leadership Team */}
        {renderTeamGroup("Kepemimpinan", leadership, "red-600")}
        
        {/* Coordinators */}
        {renderTeamGroup("Koordinator Unit", coordinators, "red-600")}
        
        {/* Support Team */}
        {renderTeamGroup("Tim Pendukung", support, "red-600")}

        {/* Join the Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Bergabung dengan Tim Kami
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Jadilah bagian dari tim yang melayani dengan hati dan mengabdi untuk masyarakat. 
              Bergabunglah dengan KSR UNPAS dan kembangkan potensi kepemimpinan Anda.
            </p>
            <a
              href="#daftar"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Daftar Sekarang
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
