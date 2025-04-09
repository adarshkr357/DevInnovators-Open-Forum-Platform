document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Edit profile button functionality
    const editProfileBtn = document.getElementById('edit-profile');
    editProfileBtn.addEventListener('click', () => {
        // Switch to settings tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        document.querySelector('.tab-btn[data-tab="settings"]').classList.add('active');
        document.getElementById('settings-tab').classList.add('active');
    });
    
    // Follow button toggle
    const followBtn = document.getElementById('follow-btn');
    if (followBtn) {
        followBtn.addEventListener('click', function() {
            const isFollowing = this.textContent === 'Following';
            this.textContent = isFollowing ? 'Follow' : 'Following';
            this.classList.toggle('btn-secondary');
            
            // Update follower count (simulated)
            const followerCount = document.getElementById('follower-count');
            if (followerCount) {
                const currentCount = parseInt(followerCount.textContent);
                followerCount.textContent = isFollowing ? currentCount - 1 : currentCount + 1;
            }
        });
    }
    
    // Load user posts (simulated data)
    const userPostsContainer = document.getElementById('user-posts');
    if (userPostsContainer) {
        const posts = [
            {
                id: 1,
                title: 'Getting started with Open Source contributions',
                excerpt: 'Here are some tips for making your first open source contribution...',
                date: '2 days ago',
                category: 'Open Source',
                likes: 15,
                comments: 8
            },
            {
                id: 2,
                title: 'Best practices for forum moderation',
                excerpt: 'After moderating this forum for 6 months, here are some lessons learned...',
                date: '1 week ago',
                category: 'Community',
                likes: 42,
                comments: 12
            }
        ];
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card';
            postElement.innerHTML = `
                <h4 class="post-title">${post.title}</h4>
                <div class="post-meta">Posted ${post.date} in ${post.category}</div>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-actions">
                    <span><i class="fas fa-heart"></i> ${post.likes}</span>
                    <span><i class="fas fa-comment"></i> ${post.comments}</span>
                    <span><i class="fas fa-share"></i> Share</span>
                </div>
            `;
            userPostsContainer.appendChild(postElement);
        });
    }
    
    // Load user comments (simulated data)
    const userCommentsContainer = document.getElementById('user-comments');
    if (userCommentsContainer) {
        const comments = [
            {
                id: 1,
                postTitle: 'Getting started with Open Source contributions',
                content: 'Great post! I especially liked the section about finding good first issues.',
                date: '1 day ago',
                likes: 5
            },
            {
                id: 2,
                postTitle: 'Best practices for forum moderation',
                content: 'Have you considered using automated tools for spam detection?',
                date: '3 days ago',
                likes: 2
            }
        ];
        
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-card';
            commentElement.innerHTML = `
                <div class="comment-meta">On "${comment.postTitle}" - ${comment.date}</div>
                <p class="comment-content">${comment.content}</p>
                <div class="comment-actions">
                    <span><i class="fas fa-heart"></i> ${comment.likes}</span>
                    <span><i class="fas fa-reply"></i> Reply</span>
                </div>
            `;
            userCommentsContainer.appendChild(commentElement);
        });
    }
    
    // Profile settings form submission
    const settingsForm = document.getElementById('profile-settings');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const displayName = document.getElementById('display-name').value;
            const username = document.getElementById('username').value;
            const bio = document.getElementById('bio').value;
            const email = document.getElementById('email').value;
            const theme = document.querySelector('input[name="theme"]:checked').value;
            
            // Update profile (in a real app, this would be an API call)
            document.getElementById('user-name').textContent = displayName;
            document.getElementById('user-username').textContent = `@${username}`;
            document.getElementById('user-bio').textContent = bio;
            
            // Update theme if changed
            if (theme !== localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
            
            // Show success message
            alert('Profile updated successfully!');
        });
    }
    
    // Change password modal (would be implemented in a real app)
    const changePasswordBtn = document.getElementById('change-password');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', () => {
            alert('Change password functionality would be implemented here');
        });
    }
    
    // Delete account confirmation (would be implemented in a real app)
    const deleteAccountBtn = document.getElementById('delete-account');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
                alert('Account deletion would be processed here');
            }
        });
    }
    
    // Edit avatar functionality (simulated)
    const editAvatarBtn = document.getElementById('edit-avatar');
    if (editAvatarBtn) {
        editAvatarBtn.addEventListener('click', () => {
            // In a real app, this would open a file picker
            const newAvatar = prompt('Enter URL for new avatar image');
            if (newAvatar) {
                document.getElementById('user-avatar').src = newAvatar;
            }
        });
    }
});